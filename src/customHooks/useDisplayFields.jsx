
export default function displayFields(){
        let fieldsStart = [];
        let index = 0;
        let id = 0;

        for(let i = 0; i < 7; i++){
            for(let i = 0; i < 6; i++){
                fieldsStart.push({
                    html:
                    <div className="field" key={index}>
                        <div className="empty-field"></div>
                    </div>,
                    id: id,
                    key: index
                });
                index = index + 1;
                id = id + 1;
                if(id === 7){
                    id = 0;
                };
            };
        };
        return fieldsStart;
    };