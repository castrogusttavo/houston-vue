
<template>
  <Icon :iconName="'circle-password'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CirclePasswordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-password'
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
