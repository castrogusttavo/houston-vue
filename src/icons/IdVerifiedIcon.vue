
<template>
  <Icon :iconName="'id-verified'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IdVerifiedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'id-verified'
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
