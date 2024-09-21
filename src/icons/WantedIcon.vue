
<template>
  <Icon :iconName="'wanted'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WantedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wanted'
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
