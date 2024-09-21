
<template>
  <Icon :iconName="'peer-to-peer-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PeerToPeer02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'peer-to-peer-02'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
