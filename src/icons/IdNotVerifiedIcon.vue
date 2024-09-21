
<template>
  <Icon :iconName="'id-not-verified'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IdNotVerifiedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'id-not-verified'
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
