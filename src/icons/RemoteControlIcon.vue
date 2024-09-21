
<template>
  <Icon :iconName="'remote-control'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RemoteControlIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remote-control'
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
