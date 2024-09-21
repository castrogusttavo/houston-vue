
<template>
  <Icon :iconName="'award-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Award05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'award-05'
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
