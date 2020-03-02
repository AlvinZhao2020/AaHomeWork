class GraphNode
    attr_reader :value , :neighbors
    attr_writer :neighbors
    def initialize(value)
        @value = value
        @neighbors = []
    end
end

def bfs(starting_node, target_value)
    checked_set = []
    arr = [starting_node]
    until arr == []
        check = arr.shift
        if checked_set.include?(check)
            return nil 
        else
            checked_set << check
        end
        if check.value == target_value 
            return check
        else
            arr += check.neighbors
        end
    end
    return nil
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a,"b")
p bfs(a,'f')
