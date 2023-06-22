export function generateId(prefix){
    var id = prefix + Math.random().toString(16).slice(8)
    return id;
}