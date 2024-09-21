
<template>
  <Icon :iconName="'tea'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TeaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tea'
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
