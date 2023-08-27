# HEAD - reset - revert

## Con trỏ HEAD

![](../../_images/head-pointer.png)

- Con trỏ HEADS có tác dụng tham chiếu đến commit hiện tại → Cũng có nghĩa HEAD là commit mà mình đang làm việc.

- Hay dùng để dịch chuyển giữa các commit trong history tree của dự án.

- Bình thường thì HEAD đi ngầm theo nhánh. Nhánh trỏ đến commit nào thì HEAD ở đó. Nhưng HEAD thì có thể tháo ra được để trỏ đến các commit khác.

## Detach HEAD

- Là việc tách rời commit hiện lại mà con trỏ HEAD đang tham chiếu để trỏ đến commit mà mình muốn checkout.

- Mặc định: HEAD → branch → commit. Khi dùng lệnh checkout một commit nào đó thì HEAD → commit (tách rời khỏi branch)

- Commit chỉ định bằng mã băm (hash). Muốn checkout commit nào thì lấy mã băm của commit đó:

  ```bash
    git checkout <hash_commit>
  ```

- Để dịch chuyển giữa các commit với nhau thì sử dụng mã băm. mà để biết được mã băm thì phải sử dụng lệnh `git log`. Trong đó không cần phải gõ lại y nguyên mã băm (vì nó rất dài là loằng ngoằng). Chỉ cần gõ 1 vài kí tự đầu của nó rồi tab ra.

## Reset

## Revert

```

```
