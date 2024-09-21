
<template>
  <Icon :iconName="'insert-top-image'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertTopImageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-top-image'
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
