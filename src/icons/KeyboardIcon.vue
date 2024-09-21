
<template>
  <Icon :iconName="'keyboard'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyboardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyboard'
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
