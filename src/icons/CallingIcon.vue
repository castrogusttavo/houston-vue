
<template>
  <Icon :iconName="'calling'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calling'
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
