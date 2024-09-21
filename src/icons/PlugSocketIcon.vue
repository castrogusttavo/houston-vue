
<template>
  <Icon :iconName="'plug-socket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlugSocketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plug-socket'
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
