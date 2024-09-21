
<template>
  <Icon :iconName="'text'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text'
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
