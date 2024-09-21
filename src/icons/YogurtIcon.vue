
<template>
  <Icon :iconName="'yogurt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YogurtIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yogurt'
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
