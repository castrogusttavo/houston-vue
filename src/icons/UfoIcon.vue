
<template>
  <Icon :iconName="'ufo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UfoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ufo'
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
