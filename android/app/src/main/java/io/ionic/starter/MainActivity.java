package io.ionic.starter;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import io.uqudo.sdk.id.capacitor.UqudoIdPlugin;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
	registerPlugin(UqudoIdPlugin.class);
    }

}
