import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
function Like() {
  const [like, setLike] = useState(false);
  if (like === true)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={() => setLike(false)} />
    );
  return <AiFillHeart size={20} onClick={() => setLike(true)} />;
}
export default Like;
