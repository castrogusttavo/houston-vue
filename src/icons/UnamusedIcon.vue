
<template>
  <Icon :iconName="'unamused'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UnamusedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unamused'
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
