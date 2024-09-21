
<template>
  <Icon :iconName="'insert-center-image'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertCenterImageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-center-image'
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
