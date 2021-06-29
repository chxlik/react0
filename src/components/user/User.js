export default function User({item, showInfo}) {

    return (
        <div>
            <div>
                {item.id} - {item.name}
                <button onClick={() => showInfo(item)}>info</button>
            </div>
        </div>
    );
}