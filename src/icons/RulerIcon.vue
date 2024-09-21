
<template>
  <Icon :iconName="'ruler'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RulerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ruler'
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
