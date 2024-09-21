
<template>
  <Icon :iconName="'arrow-down-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDown05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-down-05'
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
