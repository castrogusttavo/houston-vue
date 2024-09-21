
<template>
  <Icon :iconName="'peer-to-peer-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PeerToPeer03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'peer-to-peer-03'
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
