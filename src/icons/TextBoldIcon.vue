
<template>
  <Icon :iconName="'text-bold'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextBoldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-bold'
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
