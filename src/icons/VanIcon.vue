
<template>
  <Icon :iconName="'van'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'van'
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
