
<template>
  <Icon :iconName="'tennis-ball'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TennisBallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tennis-ball'
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
