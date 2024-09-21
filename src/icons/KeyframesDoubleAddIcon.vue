
<template>
  <Icon :iconName="'keyframes-double-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframesDoubleAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframes-double-add'
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
