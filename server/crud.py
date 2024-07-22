from sqlalchemy.orm import Session
from .models import Task, TaskStatus
from .schemas import TaskCreate, TaskUpdate

def create_task(db: Session, task: TaskCreate):
    new_task = Task(title=task.title, description=task.description, status=task.status)
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

def get_tasks(db: Session):
    return db.query(Task).all()

def update_task_status(db: Session, task_id: int, task_update: TaskUpdate):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        return None
    task.title = task_update.title
    task.description = task_update.description
    task.status = task_update.status
    db.commit()
    db.refresh(task)
    return task

def delete_task(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        return None
    db.delete(task)
    db.commit()
    return task
