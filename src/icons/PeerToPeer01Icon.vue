
<template>
  <Icon :iconName="'peer-to-peer-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PeerToPeer01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'peer-to-peer-01'
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
