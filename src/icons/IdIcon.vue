
<template>
  <Icon :iconName="'id'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'id'
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
