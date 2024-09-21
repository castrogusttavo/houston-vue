
<template>
  <Icon :iconName="'displeased'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DispleasedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'displeased'
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
