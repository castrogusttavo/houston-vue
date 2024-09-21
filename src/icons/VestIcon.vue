
<template>
  <Icon :iconName="'vest'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VestIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vest'
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
