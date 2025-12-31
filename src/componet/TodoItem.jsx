const TodoItem = ({id, content, onDelete}) => {

  const onClickDelete = () => {
    onDelete(id);
  }

  return(
    <>

    <div className="item">
      <p>{content}</p>
      <button type="button" onClick={onClickDelete}>삭제</button>
    </div>
    
    </>
  );
}

export default TodoItem;