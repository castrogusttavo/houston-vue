
<template>
  <Icon :iconName="'perspective'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PerspectiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'perspective'
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
