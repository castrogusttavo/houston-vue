
<template>
  <Icon :iconName="'arrow-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-vertical'
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
