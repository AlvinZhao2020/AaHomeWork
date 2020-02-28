 class Stack
    def initialize
       @stack = []
    end

    def push(el)
       @stack << el
    end

    def pop
      @stack.pop
    end

    def peek
      @stack[-1]
    end
  end



class   Queue
    def initialize
        @queue = []
    end
    def enqueue(el)
        @queue.push(el)
    end
    def dequeue
        @queue.shift
    end
    def peek
        @queue[0]
    end
end

class Map
    def initialize
        @grid = []
    end
    
    def set(k,v)
        if @grid.none?{|pair| pair[0] == k}
            @grid << [k,v] 
        else    
            @grid.each do |pair|
                pair[1] = v if pair[0] == k
            end
        end
    end

    def get(k)
        @grid.each do |pair|
            return pair[1] if pair[0] == k
        end
        return nil
    end

    def delete(k)
        @grid.each do |pair|
           return  @grid.delete(pair) if pair[0] == k
        end
        return nil 
    end

    def show
        @grid.each do |pair|
            print "#{pair} \n"
        end
    end
end

