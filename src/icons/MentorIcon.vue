
<template>
  <Icon :iconName="'mentor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MentorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mentor'
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
