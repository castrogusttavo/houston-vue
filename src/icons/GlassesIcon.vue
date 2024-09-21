
<template>
  <Icon :iconName="'glasses'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlassesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'glasses'
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
