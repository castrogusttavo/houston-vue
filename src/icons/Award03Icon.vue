
<template>
  <Icon :iconName="'award-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Award03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'award-03'
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
