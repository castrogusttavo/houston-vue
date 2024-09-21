
<template>
  <Icon :iconName="'insert-bottom-image'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertBottomImageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-bottom-image'
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
