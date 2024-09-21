
<template>
  <Icon :iconName="'reload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reload'
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
