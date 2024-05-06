//
//  ListaForNs.swift
//  ListHorizontal
//
//  Created by Maria Castillo on 5/5/24.
//

import Foundation
import SwiftUI

enum ContainerShape {
    case circle
    case square
    case verticalRectangle
}

@objcMembers
@objc(ListaForNs)
public class ListaForNs: NSObject {
    public func createScroll(contenedor:UIView){
       let lista = ScrollView(.horizontal) {
            LazyHStack(spacing: 20) {
                ForEach(0..<3) { index in
                    ContainerView(shape: index == 0 ? .circle : index == 1 ? .square : .verticalRectangle)
                }
            }.padding()
        }.frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height * 0.2)
        let uiview = self.convertirViewToUiView(view: lista);
        contenedor.addSubview(uiview);
    }
    
    
    public func convertirViewToUiView<Content: View>(view: Content) -> UIView {
        let hostingController = UIHostingController(rootView: view)
        let view = hostingController.view
        return view ?? UIView()
    }
}

struct ContainerView: View {
    var shape: ContainerShape
    
    var body: some View {
        let cornerRadius: CGFloat = 10
        
        ZStack {
            RoundedRectangle(cornerRadius: shape == .square || shape == .verticalRectangle ? cornerRadius : 0)
                .fill(Color.blue.opacity(0.5))
                .aspectRatio(1, contentMode: .fit)
                .if(shape == .circle) { view in
                    view.clipShape(Circle())
                }
            VStack {
                Text("Top")
                    .font(.system(size: 14))
                    .padding(.top, 10)
                Spacer()
                Text("24")
                    .font(.system(size: 18))
                    .fontWeight(.bold)
                Spacer()
            }
            .padding()
            .foregroundColor(.white)
        }.frame(width: 80, height: 80)
    }
}

extension View {
    @ViewBuilder
    func `if`<Content: View>(_ condition: Bool, content: (Self) -> Content) -> some View {
        if condition {
            content(self)
        } else {
            self
        }
    }
}
