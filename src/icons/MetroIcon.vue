
<template>
  <Icon :iconName="'metro'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MetroIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'metro'
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
