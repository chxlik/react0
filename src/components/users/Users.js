import User from "../user/User";

export default function Users({items, showInfo}) {
    console.log(items)
    return (
        <div>
            {items.map(u => <User key={u.id} item={u} showInfo={showInfo}/>)}
        </div>
    );
}