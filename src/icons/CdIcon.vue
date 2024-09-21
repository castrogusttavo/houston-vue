
<template>
  <Icon :iconName="'cd'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cd'
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
