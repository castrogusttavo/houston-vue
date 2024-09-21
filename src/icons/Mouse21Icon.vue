
<template>
  <Icon :iconName="'mouse-21'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse21Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-21'
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
