
<template>
  <Icon :iconName="'charity'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CharityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'charity'
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
