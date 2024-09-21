
<template>
  <Icon :iconName="'insert-pi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InsertPiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'insert-pi'
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
