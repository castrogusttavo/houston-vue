
<template>
  <Icon :iconName="'delete-throw'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeleteThrowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delete-throw'
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
