from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from schemas import TaskCreate, TaskUpdate, TaskResponse
from crud import create_task, get_tasks, update_task_status, delete_task
from dependencies import get_db

task_router = APIRouter()

@task_router.post("/tasks", response_model=TaskResponse)
def create_new_task(task: TaskCreate, db: Session = Depends(get_db)):
    try:
        return create_task(db, task)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

@task_router.get("/tasks", response_model=list[TaskResponse])
def read_tasks(db: Session = Depends(get_db)):
    try:
        return get_tasks(db)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

@task_router.put("/tasks/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task_update: TaskUpdate, db: Session = Depends(get_db)):
    try:
        updated_task = update_task_status(db, task_id, task_update)
        if not updated_task:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
        return updated_task
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

@task_router.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_task(task_id: int, db: Session = Depends(get_db)):
    try:
        result = delete_task(db, task_id)
        if not result:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
